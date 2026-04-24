import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const ROSE = {
    50: "#fdf4f0",
    100: "#f9e0d8",
    200: "#f0bfb0",
    400: "#c9896e",
    600: "#a05a44",
    800: "#6b3322",
};

const SAGE = {
    50: "#f2f5ef",
    100: "#d8e2d0",
    200: "#b8cca8",
    400: "#7a9b6a",
    600: "#4e6b3e",
    800: "#2e4023",
};

const FloralSVG = ({ style, opacity = 0.18, color = SAGE[400], size = 220 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 220 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ ...style, opacity }}
    >
        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
            <g key={i} transform={`rotate(${deg}, 110, 110)`}>
                <ellipse cx="110" cy="68" rx="12" ry="30" fill={color} />
                <ellipse cx="110" cy="68" rx="6" ry="20" fill={color} opacity="0.5" />
            </g>
        ))}
        <circle cx="110" cy="110" r="16" fill={color} />
        <circle cx="110" cy="110" r="8" fill={ROSE[400]} opacity="0.7" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
            <g key={i} transform={`rotate(${deg}, 110, 110)`}>
                <path
                    d={`M110,110 Q${110 + 35},${110 - 20} ${110 + 50},110 Q${110 + 35},${110 + 20} 110,110`}
                    fill={color}
                    opacity="0.3"
                />
            </g>
        ))}
    </svg>
);

const LeafSVG = ({ style, opacity = 0.22, color = SAGE[400], size = 120, rotate = 0 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ ...style, opacity, transform: `rotate(${rotate}deg)` }}
    >
        <path d="M60 10 Q100 30 100 70 Q80 105 60 110 Q40 105 20 70 Q20 30 60 10Z" fill={color} />
        <path d="M60 10 Q60 60 60 110" stroke={SAGE[600]} strokeWidth="1.5" opacity="0.5" />
        <path d="M60 40 Q75 55 90 60" stroke={SAGE[600]} strokeWidth="1" opacity="0.4" />
        <path d="M60 40 Q45 55 30 60" stroke={SAGE[600]} strokeWidth="1" opacity="0.4" />
        <path d="M60 65 Q78 75 92 78" stroke={SAGE[600]} strokeWidth="1" opacity="0.3" />
        <path d="M60 65 Q42 75 28 78" stroke={SAGE[600]} strokeWidth="1" opacity="0.3" />
    </svg>
);

const TwigSVG = ({ style, opacity = 0.25, color = SAGE[400] }) => (
    <svg
        width="180"
        height="300"
        viewBox="0 0 180 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ ...style, opacity }}
    >
        <path d="M90 290 Q85 200 80 150 Q75 100 70 50" stroke={color} strokeWidth="2" />
        <path d="M80 200 Q50 180 30 160" stroke={color} strokeWidth="1.5" />
        <path d="M82 170 Q110 150 130 135" stroke={color} strokeWidth="1.5" />
        <path d="M78 140 Q55 120 40 100" stroke={color} strokeWidth="1.5" />
        <path d="M76 110 Q100 95 115 80" stroke={color} strokeWidth="1.5" />
        <ellipse cx="30" cy="155" rx="10" ry="16" fill={color} transform="rotate(-30, 30, 155)" />
        <ellipse cx="130" cy="130" rx="10" ry="16" fill={color} transform="rotate(20, 130, 130)" />
        <ellipse cx="40" cy="95" rx="9" ry="14" fill={color} transform="rotate(-40, 40, 95)" />
        <ellipse cx="115" cy="75" rx="9" ry="14" fill={color} transform="rotate(15, 115, 75)" />
        <ellipse cx="70" cy="45" rx="8" ry="13" fill={color} transform="rotate(-10, 70, 45)" />
    </svg>
);

const Rose2SVG = ({ style, opacity = 0.2, size = 90 }) => (
    <svg width={size} height={size} viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ ...style, opacity }}>
        {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((deg, i) => (
            <g key={i} transform={`rotate(${deg}, 45, 45)`}>
                <ellipse cx="45" cy="22" rx="9" ry="18" fill={ROSE[400]} />
            </g>
        ))}
        <circle cx="45" cy="45" r="12" fill={ROSE[200]} />
        <circle cx="45" cy="45" r="6" fill={ROSE[600]} />
    </svg>
);

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

const slideLeft = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
};

const slideRight = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.82 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] } },
};

export default function AFlorDePiel() {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            style={{
                minHeight: "100vh",
                background: `linear-gradient(160deg, ${ROSE[50]} 0%, #faf7f4 40%, ${SAGE[50]} 100%)`,
                fontFamily: "'Cormorant Garamond', 'Georgia', serif",
                overflow: "hidden",
                position: "relative",
            }}
        >
            {/* Google Font */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Raleway:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #fdf4f0; }
      `}</style>

            {/* Decoraciones de fondo */}
            <motion.div
                initial={{ opacity: 0, rotate: -20, x: -60 }}
                animate={{ opacity: 1, rotate: 0, x: 0 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                style={{ position: "absolute", top: -30, left: -30, pointerEvents: "none" }}
            >
                <TwigSVG opacity={0.22} color={SAGE[400]} />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, rotate: 20, x: 60 }}
                animate={{ opacity: 1, rotate: 0, x: 0 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                style={{ position: "absolute", top: -20, right: 10, pointerEvents: "none", transform: "scaleX(-1)" }}
            >
                <TwigSVG opacity={0.18} color={SAGE[400]} />
            </motion.div>

            <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                style={{ position: "absolute", bottom: 60, left: 40, pointerEvents: "none" }}
            >
                <FloralSVG size={180} opacity={0.13} color={ROSE[400]} />
            </motion.div>

            <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 }}
                style={{ position: "absolute", bottom: 80, right: 30, pointerEvents: "none" }}
            >
                <FloralSVG size={140} opacity={0.13} color={SAGE[400]} />
            </motion.div>

            <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                style={{ position: "absolute", top: "35%", left: "5%", pointerEvents: "none" }}
            >
                <LeafSVG size={80} opacity={0.15} color={SAGE[400]} rotate={-30} />
            </motion.div>
            <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                style={{ position: "absolute", top: "55%", right: "4%", pointerEvents: "none" }}
            >
                <LeafSVG size={70} opacity={0.13} color={SAGE[400]} rotate={45} />
            </motion.div>

            {/* Líneas decorativas */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    right: 0,
                    height: "1px",
                    background: `linear-gradient(90deg, transparent, ${ROSE[200]}, ${SAGE[200]}, transparent)`,
                    pointerEvents: "none",
                    transformOrigin: "left",
                }}
            />

            {/* NAV */}
            <motion.nav
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "24px 48px",
                    position: "relative",
                    zIndex: 10,
                }}
            >
                <div style={{ display: "flex", gap: 32 }}>
                    {["Servicios", "Galería", "Nosotras"].map((item) => (
                        <motion.a
                            key={item}
                            href="#"
                            whileHover={{ color: ROSE[600] }}
                            style={{
                                fontFamily: "'Raleway', sans-serif",
                                fontWeight: 400,
                                fontSize: 13,
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: SAGE[800],
                                textDecoration: "none",
                                transition: "color 0.3s",
                            }}
                        >
                            {item}
                        </motion.a>
                    ))}
                </div>
                <motion.div
                    style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: 11,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: ROSE[600],
                        fontWeight: 500,
                    }}
                >
                    ✦ Concepción, Tucumán
                </motion.div>
                <motion.a
                    href="#"
                    whileHover={{ backgroundColor: ROSE[600], color: "#fff" }}
                    style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: 12,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: ROSE[600],
                        textDecoration: "none",
                        border: `1px solid ${ROSE[400]}`,
                        padding: "10px 22px",
                        borderRadius: 2,
                        fontWeight: 500,
                        transition: "all 0.35s",
                    }}
                >
                    Reservar turno
                </motion.a>
            </motion.nav>

            {/* HERO CONTENT */}
            <motion.main
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 0,
                    minHeight: "calc(100vh - 90px)",
                    alignItems: "center",
                    padding: "0 48px 60px",
                    position: "relative",
                    zIndex: 5,
                }}
            >
                {/* Left: Text */}
                <div style={{ paddingRight: 48 }}>
                    {/* Tagline */}
                    <motion.div variants={fadeUp} style={{ marginBottom: 20 }}>
                        <span
                            style={{
                                fontFamily: "'Raleway', sans-serif",
                                fontSize: 11,
                                letterSpacing: "0.25em",
                                textTransform: "uppercase",
                                color: SAGE[600],
                                fontWeight: 500,
                                display: "flex",
                                alignItems: "center",
                                gap: 10,
                            }}
                        >
                            <span
                                style={{
                                    display: "inline-block",
                                    width: 30,
                                    height: 1,
                                    background: SAGE[400],
                                }}
                            />
                            Salón de Belleza
                            <span
                                style={{
                                    display: "inline-block",
                                    width: 30,
                                    height: 1,
                                    background: SAGE[400],
                                }}
                            />
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        variants={fadeUp}
                        style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: "clamp(52px, 6.5vw, 86px)",
                            fontWeight: 300,
                            lineHeight: 1.08,
                            color: SAGE[800],
                            marginBottom: 12,
                            letterSpacing: "-0.01em",
                        }}
                    >
                        a flor
                    </motion.h1>
                    <motion.h1
                        variants={fadeUp}
                        style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: "clamp(52px, 6.5vw, 86px)",
                            fontWeight: 300,
                            fontStyle: "italic",
                            lineHeight: 1.08,
                            color: ROSE[600],
                            marginBottom: 32,
                            letterSpacing: "-0.01em",
                        }}
                    >
                        de piel
                    </motion.h1>

                    {/* Divider ornament */}
                    <motion.div
                        variants={fadeUp}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                            marginBottom: 28,
                        }}
                    >
                        <div style={{ height: 1, width: 40, background: ROSE[300] }} />
                        <Rose2SVG size={28} opacity={0.8} />
                        <div style={{ height: 1, width: 40, background: SAGE[300] }} />
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        variants={fadeUp}
                        style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: 20,
                            fontWeight: 300,
                            lineHeight: 1.7,
                            color: SAGE[600],
                            maxWidth: 420,
                            marginBottom: 44,
                            letterSpacing: "0.01em",
                        }}
                    >
                        Donde cada detalle es un ritual. Realzamos tu belleza natural con técnicas artesanales y productos de cuidado premium.
                    </motion.p>

                    {/* Services pills */}
                    <motion.div
                        variants={fadeUp}
                        style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 44 }}
                    >
                        {["Cejas & Pestañas", "Colorimetría", "Lifting Facial", "Manicuría"].map((s) => (
                            <motion.span
                                key={s}
                                whileHover={{ backgroundColor: ROSE[100], color: ROSE[800] }}
                                style={{
                                    fontFamily: "'Raleway', sans-serif",
                                    fontSize: 11,
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    color: SAGE[600],
                                    border: `1px solid ${SAGE[200]}`,
                                    padding: "8px 16px",
                                    borderRadius: 2,
                                    fontWeight: 500,
                                    background: "rgba(255,255,255,0.6)",
                                    cursor: "pointer",
                                    transition: "all 0.3s",
                                }}
                            >
                                {s}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* CTA */}
                    <motion.div variants={fadeUp} style={{ display: "flex", gap: 16, alignItems: "center" }}>
                        <motion.button
                            whileHover={{ scale: 1.03, backgroundColor: ROSE[800] }}
                            whileTap={{ scale: 0.97 }}
                            style={{
                                fontFamily: "'Raleway', sans-serif",
                                fontSize: 12,
                                letterSpacing: "0.15em",
                                textTransform: "uppercase",
                                color: "#fff",
                                background: ROSE[600],
                                border: "none",
                                padding: "16px 36px",
                                borderRadius: 2,
                                fontWeight: 500,
                                cursor: "pointer",
                                transition: "background 0.3s",
                            }}
                        >
                            Reservar turno
                        </motion.button>
                        <motion.a
                            href="#"
                            whileHover={{ color: SAGE[800] }}
                            style={{
                                fontFamily: "'Raleway', sans-serif",
                                fontSize: 12,
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: SAGE[600],
                                textDecoration: "none",
                                fontWeight: 400,
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                            }}
                        >
                            Ver servicios
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                            >
                                →
                            </motion.span>
                        </motion.a>
                    </motion.div>
                </div>

                {/* Right: Image */}
                <motion.div
                    variants={scaleIn}
                    style={{ position: "relative", display: "flex", justifyContent: "center" }}
                >
                    {/* Background circle */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            position: "absolute",
                            width: "85%",
                            aspectRatio: "1",
                            borderRadius: "50%",
                            background: `radial-gradient(circle, ${ROSE[100]} 0%, ${SAGE[100]} 100%)`,
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 0,
                        }}
                    />

                    {/* Corner decorations */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        style={{ position: "absolute", top: 10, right: 10, zIndex: 3 }}
                    >
                        <FloralSVG size={80} opacity={0.5} color={ROSE[400]} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.1, duration: 0.8 }}
                        style={{ position: "absolute", bottom: 10, left: 0, zIndex: 3 }}
                    >
                        <LeafSVG size={90} opacity={0.4} color={SAGE[400]} rotate={120} />
                    </motion.div>

                    {/* Frame */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            position: "relative",
                            zIndex: 2,
                            borderRadius: "60% 40% 55% 45% / 50% 50% 50% 50%",
                            overflow: "hidden",
                            width: "72%",
                            aspectRatio: "3/4",
                            boxShadow: `0 30px 80px rgba(160, 90, 68, 0.18), 0 8px 30px rgba(78, 107, 62, 0.10)`,
                            border: `3px solid rgba(255,255,255,0.7)`,
                        }}
                    >
                        <img
                            src="/assets/hero.png"
                            alt="A Flor de Piel - Modelo"
                            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
                        />
                        {/* Color overlay sutil */}
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                background: `linear-gradient(180deg, transparent 40%, ${ROSE[50]}88 100%)`,
                            }}
                        />
                    </motion.div>

                    {/* Floating card */}
                    <motion.div
                        initial={{ opacity: 0, x: 40, y: 10 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: 1.0, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            position: "absolute",
                            bottom: "12%",
                            right: "0%",
                            background: "rgba(255,255,255,0.88)",
                            backdropFilter: "blur(12px)",
                            border: `1px solid ${ROSE[200]}`,
                            borderRadius: 6,
                            padding: "16px 22px",
                            zIndex: 4,
                            minWidth: 160,
                        }}
                    >
                        <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: SAGE[400], marginBottom: 4 }}>
                            Experiencia
                        </p>
                        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 30, fontWeight: 600, color: ROSE[600], lineHeight: 1 }}>
                            +8 <span style={{ fontSize: 15, fontWeight: 300, color: SAGE[600] }}>años</span>
                        </p>
                    </motion.div>

                    {/* Second floating card */}
                    <motion.div
                        initial={{ opacity: 0, x: -40, y: -10 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            position: "absolute",
                            top: "15%",
                            left: "0%",
                            background: "rgba(255,255,255,0.88)",
                            backdropFilter: "blur(12px)",
                            border: `1px solid ${SAGE[200]}`,
                            borderRadius: 6,
                            padding: "14px 18px",
                            zIndex: 4,
                            minWidth: 140,
                        }}
                    >
                        <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: ROSE[400], marginBottom: 4 }}>
                            Clientas felices
                        </p>
                        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 600, color: SAGE[600], lineHeight: 1 }}>
                            500+
                        </p>
                    </motion.div>
                </motion.div>
            </motion.main>

            {/* Bottom bar */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "18px 48px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderTop: `1px solid ${ROSE[100]}`,
                    background: "rgba(253,244,240,0.5)",
                    backdropFilter: "blur(8px)",
                }}
            >
                {["Lun – Vie: 9:00 – 19:00", "Sáb: 9:00 – 16:00", "📍 Concepción, Tucumán"].map((item, i) => (
                    <span
                        key={i}
                        style={{
                            fontFamily: "'Raleway', sans-serif",
                            fontSize: 11,
                            letterSpacing: "0.1em",
                            color: SAGE[600],
                            fontWeight: 400,
                        }}
                    >
                        {item}
                    </span>
                ))}
                <div style={{ display: "flex", gap: 16 }}>
                    {["Instagram", "WhatsApp"].map((s) => (
                        <motion.a
                            key={s}
                            href="#"
                            whileHover={{ color: ROSE[600] }}
                            style={{
                                fontFamily: "'Raleway', sans-serif",
                                fontSize: 11,
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                color: SAGE[400],
                                textDecoration: "none",
                                fontWeight: 500,
                                transition: "color 0.3s",
                            }}
                        >
                            {s}
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}