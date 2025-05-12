
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				portfolio: {
					navy: '#0F172A',
					teal: '#4FD1C5',
					accent: '#38B2AC',
					light: '#F8FAFC',
					dark: '#1E293B',
					purple: '#8B5CF6',
					indigo: '#6366F1',
					pink: '#EC4899',
					orange: '#F97316',
					emerald: '#10B981',
					sky: '#0EA5E9'
				},
				modern: {
					primary: '#8B5CF6',
					secondary: '#EC4899',
					accent: '#10B981',
					neutral: '#F8FAFC',
					"neutral-content": '#1E293B',
					info: '#0EA5E9',
					success: '#10B981',
					warning: '#F97316',
					error: '#EF4444',
					light: '#F1F5F9',
					dark: '#0F172A'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					from: { opacity: '0', transform: 'translateY(10px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in': {
					from: { transform: 'translateX(-20px)', opacity: '0' },
					to: { transform: 'translateX(0)', opacity: '1' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 0 0 rgba(79, 209, 197, 0)' },
					'50%': { boxShadow: '0 0 20px 5px rgba(79, 209, 197, 0.4)' }
				},
				'gradient-shift': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'slide-in': 'slide-in 0.5s ease-out forwards',
				'pulse-glow': 'pulse-glow 2s infinite',
				'gradient-shift': 'gradient-shift 3s ease infinite'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Poppins', 'sans-serif']
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'gradient-modern': 'linear-gradient(to right, #8B5CF6, #EC4899, #10B981)',
				'hero-pattern': 'linear-gradient(to bottom right, rgba(248, 250, 252, 0.9), rgba(248, 250, 252, 0.7)), url("/hero-bg.jpg")',
				'section-pattern': 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
