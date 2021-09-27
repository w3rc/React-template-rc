import { pathVariant, svgVariant } from "animations/splash";
import { motion } from "framer-motion";

const SplashScreen = () => {
    return <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: "hsl(249, 85%, 39%)", color: 'white', fontSize: 25 }}>
        <motion.svg variants={svgVariant} initial="hidden" animate="visible" width="199" height="27" viewBox="0 0 199 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path variants={pathVariant} d="M21.52 0.799998L25.84 17L29.62 0.799998H36.64L29.8 26H22.96L18.64 10.34L14.32 26H7.48L0.64 0.799998H7.66L11.44 17L15.76 0.799998H21.52ZM59.5169 20.6C59.5169 22.4 59.0009 23.816 57.9689 24.848C56.9609 25.856 55.5569 26.36 53.7569 26.36H45.4769C43.6769 26.36 42.2609 25.856 41.2289 24.848C40.2209 23.816 39.7169 22.4 39.7169 20.6V12.32C39.7169 10.52 40.2209 9.116 41.2289 8.108C42.2609 7.076 43.6769 6.56 45.4769 6.56H53.7569C55.5569 6.56 56.9609 7.076 57.9689 8.108C59.0009 9.116 59.5169 10.52 59.5169 12.32V20.6ZM53.2169 12.86C53.2169 11.9 52.7369 11.42 51.7769 11.42H47.4569C46.4969 11.42 46.0169 11.9 46.0169 12.86V20.06C46.0169 21.02 46.4969 21.5 47.4569 21.5H51.7769C52.7369 21.5 53.2169 21.02 53.2169 20.06V12.86ZM75.7127 12.14C74.2007 12.14 72.6407 12.5 71.0327 13.22V26H64.7327V6.92H70.3127L70.6727 9.26C72.7367 7.46 74.8967 6.56 77.1527 6.56H78.7727V12.14H75.7127ZM89.5713 18.44V26H83.2713V0.799998H89.5713V13.58H92.4513L96.4113 6.92H103.071L97.6713 16.1L103.071 26H96.4113L92.2713 18.44H89.5713ZM129.157 26H122.677V15.74H113.677V26H107.197V0.799998H113.677V10.7H122.677V0.799998H129.157V26ZM154.554 20.6C154.554 22.4 154.038 23.816 153.006 24.848C151.998 25.856 150.594 26.36 148.794 26.36H140.514C138.714 26.36 137.298 25.856 136.266 24.848C135.258 23.816 134.754 22.4 134.754 20.6V12.32C134.754 10.52 135.258 9.116 136.266 8.108C137.298 7.076 138.714 6.56 140.514 6.56H148.794C150.594 6.56 151.998 7.076 153.006 8.108C154.038 9.116 154.554 10.52 154.554 12.32V20.6ZM148.254 12.86C148.254 11.9 147.774 11.42 146.814 11.42H142.494C141.534 11.42 141.054 11.9 141.054 12.86V20.06C141.054 21.02 141.534 21.5 142.494 21.5H146.814C147.774 21.5 148.254 21.02 148.254 20.06V12.86ZM168.59 21.14C169.862 21.14 171.302 20.9 172.91 20.42V6.92H179.21V26H173.63L173.27 24.2C172.142 24.944 170.978 25.496 169.778 25.856C168.602 26.192 167.606 26.36 166.79 26.36H165.17C163.538 26.36 162.23 25.868 161.246 24.884C160.262 23.9 159.77 22.592 159.77 20.96V6.92H166.07V19.88C166.07 20.24 166.19 20.54 166.43 20.78C166.67 21.02 166.97 21.14 167.33 21.14H168.59ZM195.757 12.14C194.245 12.14 192.685 12.5 191.077 13.22V26H184.777V6.92H190.357L190.717 9.26C192.781 7.46 194.941 6.56 197.197 6.56H198.817V12.14H195.757Z" fill="white" />
        </motion.svg>

    </div>;
};

export default SplashScreen;