/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'carolina-blue': 'hsl(201, 92%, 47%)',
  			'royal-blue-light': 'hsl(225, 68%, 53%)',
  			'flickr-blue-30': 'hsla(225, 68%, 53%, 0.3)',
  			'oxford-blue-1': 'hsl(218, 70%, 18%)',
  			'oxford-blue-2': 'hsl(217, 100%, 12%)',
  			'oxford-blue-3': 'hsl(218, 71%, 11%)',
  			'light-steel-blue': 'hsl(218, 33%, 77%)',
  			'lavender-web': 'hsl(225, 67%, 91%)',
  			'sonic-silver': 'hsl(0, 0%, 47%)',
  			'light-gray': 'hsl(0, 0%, 84%)',
  			cultured: 'hsl(0, 0%, 97%)',
  			'gainsboro-50': 'hsla(0, 0%, 85%, 0.5)',
  			'black-10': 'hsla(0, 0%, 0%, 0.1)',
  			'black-8': 'hsla(0, 0%, 0%, 0.08)',
  			jet: 'hsl(0, 0%, 20%)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			montserrat: [
  				'Montserrat',
  				'sans-serif'
  			],
  			lato: [
  				'Lato',
  				'sans-serif'
  			]
  		},
  		backgroundImage: {
  			'dentelo-gradient': 'linear-gradient(90deg, hsl(201, 92%, 47%) 0%, hsl(225, 68%, 53%) 100%)'
  		},
  		spacing: {
  			'18': '4.5rem',
  			'88': '22rem',
  			'128': '32rem'
  		},
  		animation: {
  			'spin-slow': 'spin 3s linear infinite',
  			'pulse-slow': 'pulse 3s ease-in-out infinite'
  		},
  		backdropBlur: {
  			xs: '2px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

