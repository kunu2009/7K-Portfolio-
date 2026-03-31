/**
 * Dynamic OG Image Generation
 * Creates beautiful share cards for social media
 */

import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

// Image dimensions for OG
const SIZE = {
  width: 1200,
  height: 630,
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  // Get dynamic parameters
  const title = searchParams.get("title") || "7K Apps";
  const description = searchParams.get("description") || "Creative Apps & Digital Solutions";
  const type = searchParams.get("type") || "default"; // default, app, blog, service
  const image = searchParams.get("image");
  const tags = searchParams.get("tags")?.split(",") || [];
  const author = searchParams.get("author") || "Chetha";
  const date = searchParams.get("date");

  // Load fonts (use fetch for edge runtime)
  const fontData = await fetch(
    new URL("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap", request.url)
  ).catch(() => null);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(56, 189, 248, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(167, 139, 250, 0.1) 0%, transparent 50%)",
        }}
      >
        {/* Main Content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            padding: "60px",
            gap: "40px",
          }}
        >
          {/* Left Side - Text Content */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* Type Badge */}
            {type !== "default" && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    padding: "8px 16px",
                    borderRadius: "9999px",
                    fontSize: "14px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    background:
                      type === "app"
                        ? "linear-gradient(135deg, #3b82f6, #8b5cf6)"
                        : type === "blog"
                        ? "linear-gradient(135deg, #10b981, #06b6d4)"
                        : "linear-gradient(135deg, #f59e0b, #ef4444)",
                    color: "white",
                  }}
                >
                  {type === "app" ? "📱 App" : type === "blog" ? "📝 Blog" : "🚀 Service"}
                </span>
              </div>
            )}

            {/* Title */}
            <h1
              style={{
                fontSize: title.length > 40 ? "48px" : "56px",
                fontWeight: 700,
                color: "white",
                lineHeight: 1.1,
                margin: 0,
                marginBottom: "16px",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {title}
            </h1>

            {/* Description */}
            {description && (
              <p
                style={{
                  fontSize: "24px",
                  color: "#a1a1aa",
                  lineHeight: 1.4,
                  margin: 0,
                  marginBottom: "24px",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {description}
              </p>
            )}

            {/* Tags */}
            {tags.length > 0 && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "24px",
                }}
              >
                {tags.slice(0, 4).map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      padding: "6px 12px",
                      borderRadius: "6px",
                      fontSize: "14px",
                      background: "rgba(255, 255, 255, 0.1)",
                      color: "#d4d4d8",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    {tag.trim()}
                  </span>
                ))}
              </div>
            )}

            {/* Author & Date */}
            {(author || date) && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  fontSize: "16px",
                  color: "#71717a",
                }}
              >
                {author && (
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ marginRight: "8px" }}>✍️</span>
                    {author}
                  </span>
                )}
                {date && (
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ marginRight: "8px" }}>📅</span>
                    {date}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Right Side - Image or Logo */}
          {image ? (
            <div
              style={{
                width: "400px",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={image}
                alt=""
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  borderRadius: "16px",
                  objectFit: "cover",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                }}
              />
            </div>
          ) : (
            <div
              style={{
                width: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* 7K Logo */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "24px",
                    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "48px",
                    fontWeight: 700,
                    color: "white",
                    boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)",
                  }}
                >
                  7K
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 60px",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                fontWeight: 700,
                color: "white",
              }}
            >
              7K
            </div>
            <span
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "white",
              }}
            >
              7K Apps
            </span>
          </div>
          <span
            style={{
              fontSize: "16px",
              color: "#71717a",
            }}
          >
            7kapps.com
          </span>
        </div>
      </div>
    ),
    {
      ...SIZE,
    }
  );
}
