/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
		'./index.html',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				display: ['Space Grotesk', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
				'float': {
					'0%, 100%': { transform: 'translate(0, 0) scale(1)' },
					'33%': { transform: 'translate(30px, -30px) scale(1.05)' },
					'66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
				},
				'float-delayed': {
					'0%, 100%': { transform: 'translate(0, 0) scale(1)' },
					'33%': { transform: 'translate(-30px, 20px) scale(0.95)' },
					'66%': { transform: 'translate(20px, -30px) scale(1.05)' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(40px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'slide-in-right': {
					'0%': { opacity: '0', transform: 'translateX(-20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				'pulse-subtle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' },
				},
				'line-grow': {
					'0%': { height: '0%' },
					'100%': { height: '100%' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 20s ease-in-out infinite',
				'float-delayed': 'float-delayed 25s ease-in-out infinite',
				'fade-in': 'fade-in 0.8s ease-out forwards',
				'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
				'fade-in-delayed': 'fade-in 0.8s ease-out 0.2s forwards',
				'fade-in-delayed-2': 'fade-in 0.8s ease-out 0.4s forwards',
				'fade-in-delayed-3': 'fade-in 0.8s ease-out 0.6s forwards',
				'fade-in-delayed-4': 'fade-in 0.8s ease-out 0.8s forwards',
				'slide-in-right': 'slide-in-right 0.6s ease-out forwards',
				'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
				'line-grow': 'line-grow 1.5s ease-out forwards',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
