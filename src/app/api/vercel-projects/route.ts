import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const token = process.env.VERCEL_API_TOKEN;

    if (!token) {
      return NextResponse.json(
        { success: false, message: 'Vercel API token is not configured.' },
        { status: 500 }
      );
    }

    // Call the Vercel projects endpoint (v9)
    const response = await fetch('https://api.vercel.com/v9/projects', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: { revalidate: 60 }, // Cache response for 1 minute
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Vercel API error:', errorText);
      return NextResponse.json(
        { success: false, message: `Vercel API responded with status ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Map projects into a structured list that is convenient for our frontend
    const projects = (data.projects || []).map((project: any) => {
      // Find the production aliases (websites links)
      const aliases = project.targets?.production?.alias || [];
      const primaryAlias = aliases.length > 0 ? aliases[0] : null;
      const url = primaryAlias 
        ? `https://${primaryAlias}` 
        : project.latestDeployments?.[0]?.url 
          ? `https://${project.latestDeployments[0].url}` 
          : null;

      // Extract description or create a sensible default
      const description = project.description || `A live deployment of ${project.name} built with ${project.framework || 'React'}.`;

      return {
        id: project.id,
        name: project.name,
        framework: project.framework || 'other',
        url: url,
        aliases: aliases,
        description: description,
        updatedAt: project.updatedAt,
        status: project.latestDeployments?.[0]?.readyState || 'READY',
      };
    });

    return NextResponse.json({
      success: true,
      projects: projects,
    });
  } catch (error: any) {
    console.error('Vercel projects route error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to fetch Vercel projects' },
      { status: 500 }
    );
  }
}
