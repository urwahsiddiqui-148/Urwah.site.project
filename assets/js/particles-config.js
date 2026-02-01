/**
 * tsParticles Configuration for Neon Portfolio
 * Theme: Minimal, Glowing, Neon Green/Blue
 */

const particlesConfig = {
    background: {
        color: {
            value: "transparent", // Let body background show through
        },
    },
    fpsLimit: 60,
    interactivity: {
        events: {
            onClick: {
                enable: false,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse", // Slightly repel on hover
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 100,
                duration: 0.4,
            },
        },
        detectsOn: "window", // Important: Capture events globally
    },
    particles: {
        color: {
            value: ["#00ff9d", "#00b8ff", "#00ffff"], // Neon Green, Blue, Cyan
        },
        links: {
            color: "#00ff9d",
            distance: 150,
            enable: true,
            opacity: 0.2, // Subtle links
            width: 1,
        },
        collisions: {
            enable: false,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: true,
            speed: 0.6, // Slow movement
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 30, // Optimized for performance
        },
        opacity: {
            value: { min: 0.3, max: 0.7 }, // Random opacity for depth
            animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false
            }
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 3 }, // Small, minimal particles
        },
        shadow: {
            enable: false, // Disabled for better performance
            blur: 5,
            color: {
                value: "#00ff9d"
            }
        }
    },
    detectRetina: true,
};

// Initialize tsParticles
// This assumes the library is loaded via CDN script in HTML
document.addEventListener("DOMContentLoaded", async () => {
    await tsParticles.load("tsparticles", particlesConfig);
    console.log("Particles loaded");
});
