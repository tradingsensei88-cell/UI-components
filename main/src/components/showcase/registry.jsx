// ═══════════════════════════════════════════════════════════
// NEONFORGE UI — Component Registry
// Maps category IDs to 20 interactive variants each
// ═══════════════════════════════════════════════════════════
import React from 'react'
import C from './Components'

// Prompt metadata builder
function pm(name, variant, overrides = {}) {
  return {
    name, variantNumber: variant,
    purpose: overrides.purpose || `${name} variant #${variant} — Cyberpunk/neon themed, fully interactive`,
    colors: overrides.colors || 'Primary: #B4FF00 (Acid Lime), Background: #0B1A12 (Deep Matrix Green), Text: #E8FFE8',
    glowEffects: overrides.glow || 'Neon glow — 0 0 10px rgba(180,255,0,0.3), 0 0 20px rgba(180,255,0,0.15)',
    shadows: overrides.shadows || '0 4px 16px rgba(0,0,0,0.4)',
    borderRadius: overrides.radius || '10px',
    spacing: overrides.spacing || '16px padding, 8px gap',
    layout: overrides.layout || 'Flexbox center aligned',
    hoverBehavior: overrides.hover || 'Scale 1.02, glow intensity increases',
    clickBehavior: overrides.click || 'Scale 0.96 press, spring bounce back',
    stateTransitions: overrides.transitions || '300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    animationDuration: overrides.duration || '300ms',
    animationEasing: overrides.easing || 'spring(stiffness: 500, damping: 30)',
    behaviorLogic: overrides.logic || '* State toggles on click\n  * Visual updates reflect state',
    componentStructure: overrides.structure || '* Container > Interactive Element > Visual Feedback',
    styling: overrides.styling || '* CSS custom properties\n  * Dark bg + neon accents\n  * Glassmorphism borders',
    responsiveness: overrides.responsive || '* Mobile: touch-friendly 44px targets\n  * Desktop: standard sizing',
    accessibility: overrides.a11y || '* Keyboard: Tab, Space/Enter\n  * ARIA: appropriate roles\n  * Focus: visible glow outline',
  }
}

const TOGGLE_NAMES = ['Neon Pulse', 'Cyber Switch', 'Ghost Toggle', 'Gradient Shift', 'Square Wave',
  'Aurora Glow', 'Deep Press', 'Dashed Wire', 'Spectrum Flow', 'Shimmer Gate',
  'Notch Toggle', 'Mint Glow', 'Retro Ring', 'Pixel Switch', 'Inset Shadow',
  'Hollow Core', 'Wave Morph', 'Rounded Block', 'Ring Focus', 'Check Mark',
  '3D Orb Dark', 'Glass Theme Switcher', 'Liquid Gravity', 'Cyberpunk Matrix', 'iOS Classic',
  'Glitch Shift', 'Hologram Slab', 'Magnetic Snap', 'Neon Thread', 'Morphing Core']

const SLIDER_NAMES = ['Neon Range', 'Minimal Track', 'Bordered Glow', 'Thick Gradient', 'Wire Outline',
  'Vertical Thumb', 'Tall Slot', 'Rainbow Radial', 'Sharp Edge', 'Ring Indicator',
  'Green Channel', 'Glossy Track', 'Ring Thumb', 'Diamond Knob', 'Thick Slot',
  'Sphere Knob', 'Pulse Ring', 'Bordered Glow Pro', 'Outline Knob', 'Gradient Rounded',
  'Labeled Pro', 'Stepped Arrow', 'Hatched Track', 'Tally Slide', 'Dual Range', 'Waveform UI']

const BTN_NAMES = ['Neon Glow', 'Glass Blur', 'Border Reveal', 'Soft Ghost', 'Cyber Sharp',
  'Gradient Slide', 'Retro Console', 'Minimal Line', 'Underline Fill', 'Double Border',
  'Pulse Wave', 'Shimmer Text', 'Corner Bracket', 'Dashed Outline', 'Liquid Fill',
  'Glass Refraction', 'Metal Brush', 'Stealth Dark', 'Acid Outline', 'Glitch Static',
  'Hologram', 'Skew Shift', 'Magnetic Grab', 'Particle Burst', 'Clay Morph', 'Glass Depth',
  'Liquid Pill', 'Gold Luxury', 'Typewriter', '3D Loader']

const INPUT_NAMES = ['Default Glow', 'Pill Input', 'Underline', 'Tinted Glass', 'Thick Border',
  'Gradient BG', 'Inset Shadow', 'Dashed Wire', 'Mono Terminal', 'Ring Focus',
  'Left Accent', 'Code Editor', 'Rounded Soft', 'Bottom Line', 'Elevated',
  'Outline Only', 'Double Focus', 'Gradient Depth', 'Left Bar', 'Frosted Glass']

const CARD_NAMES = ['Default Glass', 'Gradient Dark', 'Tinted Blur', 'Thick Border', 'Deep Shadow',
  'Top Gradient', 'Left Accent', 'Ghost Border', 'Soft Round', 'Dark Gradient',
  'Dashed Ghost', 'Elevated Glass', 'Double Border', 'Top Bar', 'Gradient Depth',
  'Scan Line', 'Compact', 'Frosted Glass', 'Obsidian Amber', 'Analytics Prime',
  'Cyber Pulsar', 'Nova Core', 'Prism Mirror', 'Matrix Flow', 'Caliber Loan', 'Cash Out Refi',
  'Neon Brutalist', 'Private Wealth', 'Aurora Vault', 'Nifty Ticker', 'Particle Web', 'Luxury Debt']

const PROGRESS_NAMES = ['Neon Bar', 'Gradient Line', 'Bordered Glow', 'Ultra Thin', 'Striped Pattern',
  'Sharp Edge', 'Fade In', 'Depth Bar', 'Hair Line', 'Indicator Mark']
const CIRCULAR_NAMES = ['Classic Ring', 'Gradient Ring', 'Ultra Thin', 'Thick Block', 'Dashed Fill',
  'Bright Ring', 'Glow Heavy', 'Mini Ring', 'Block Arc', 'Neon Drop']

const NOTIF_NAMES = ['Default Bell', 'Dark Bell', 'Mint Alert', 'Matrix Bell', 'Ghost Bell',
  'Pulse Alert', 'Glow Badge', 'Sound Wave', 'Priority High', 'Minimal Dot',
  'Ring Alert', 'Flash Bell', 'Vibrate', 'Silent Mode', 'Focus Bell',
  'Urgent Pulse', 'Soft Glow', 'Accent Ring', 'Outline Bell', 'Neon Badge']

const DROPDOWN_NAMES = ['Default Select', 'Rounded Glow', 'Minimal Line', 'Glass Panel', 'Dark Solid',
  'Bordered Heavy', 'Tinted Glass', 'Sharp Edge', 'Code Select', 'Ring Focus',
  'Left Accent', 'Mono Style', 'Pill Select', 'Bottom Line', 'Elevated',
  'Outline Only', 'Double Ring', 'Depth Gradient', 'Side Bar', 'Frosted Panel']

const TAB_NAMES = ['Underline Tab', 'Pill Tab', 'Highlight Tab', 'Top Line', 'Glow Tab',
  'Underline v2', 'Pill v2', 'Highlight v2', 'Top Line v2', 'Glow v2',
  'Minimal', 'Bordered', 'Filled', 'Accent', 'Ghost',
  'Rounded', 'Sharp', 'Gradient', 'Outline', 'Neon']

const MODAL_NAMES = ['Default Alert', 'Confirm Dialog', 'Form Modal', 'Fullscreen', 'Bottom Sheet',
  'Drawer Left', 'Notification', 'Success', 'Error Alert', 'Warning',
  'Info Panel', 'Loading', 'Image Preview', 'Code Block', 'Settings',
  'Delete Confirm', 'Upload', 'Share Modal', 'Profile', 'Command']

const LOADER_NAMES = ['Spinner Classic', 'Double Ring', 'Heavy Glow', 'Dot Bounce', 'Dot Fade', 'Dot Scale',
  'Bar Slide', 'Bar Thick', 'Bar Thin', 'Pulse Circle', 'Pulse Large', 'Pulse Square',
  'Orbit Ring', 'Orbit Double', 'Orbit Reverse', 'Equalizer v1', 'Equalizer v2',
  'Equalizer v3', 'Equalizer v4', 'Equalizer v5']

const CLOCK_NAMES = ['Digital Glow', 'Digital Minimal', 'Digital Neon', 'Digital Display', 'Digital Box',
  'Digital Orbitron', 'Digital Heavy', 'Digital Dim', 'Digital Alt', 'Digital Frame',
  'Analog Classic', 'Analog Bright', 'Analog Thick', 'Analog Dashed', 'Analog Glow',
  'Analog Dark', 'Analog Thin', 'Analog Minimal', 'Analog Subtle', 'Analog Neon',
  'Flip Clock', 'Binary', 'Word Clock', 'World Zones', 'Radial Arc',
  'Matrix Rain', 'Nixie Tube', 'Ring Progress', 'Split-Flap', 'Neon Marquee']

const NAV_NAMES = ['Dark Bar', 'Green Tint', 'Glass Nav', 'Solid Dark', 'Elevated',
  'Transparent', 'Bordered', 'Tinted Glass', 'Forest Nav', 'Minimal',
  'Dark Round', 'Green Pill', 'Glass Pill', 'Dark Pill', 'Shadow Nav',
  'Ghost Nav', 'Border Nav', 'Glass Dark', 'Forest Pill', 'Minimal Pill',
  'Glass Dock', 'Vertical Rail', 'Command Palette', 'Breadcrumb', 'Orbit Ring']

function makeVariants(count, factory) {
  return Array.from({ length: count }, (_, i) => factory(i + 1))
}

const REGISTRY = {
  toggles: makeVariants(30, v => ({
    name: TOGGLE_NAMES[v-1], variant: v,
    promptMeta: pm('Toggle Switch', v, {
      purpose: `${TOGGLE_NAMES[v-1]} toggle — animated switch with spring physics`,
      structure: '* Container > Track (pill shape) > Thumb (circle, animates position)\n  * Optional label text',
      logic: '* Boolean state: on/off\n  * Thumb slides with spring animation\n  * Track color transitions on state change',
    }),
    render: () => <C.Toggle variant={v} size="md" label={TOGGLE_NAMES[v-1]} />
  })),

  sliders: makeVariants(26, v => ({
    name: SLIDER_NAMES[v-1], variant: v,
    promptMeta: pm('Slider', v, {
      purpose: `${SLIDER_NAMES[v-1]} slider — range input with custom styled thumb and track`,
      structure: '* Wrapper > Label row (name + value) > Range input\n  * Custom thumb and track via CSS',
      logic: '* Numeric value 0-100\n  * Updates on drag\n  * Value display updates in real-time',
    }),
    render: () => <C.Slider variant={v} label={SLIDER_NAMES[v-1]} />
  })),

  notifications: makeVariants(20, v => ({
    name: NOTIF_NAMES[v-1], variant: v,
    promptMeta: pm('Notification Toggle', v, {
      purpose: `${NOTIF_NAMES[v-1]} — notification on/off toggle with icon and indicator`,
      structure: '* Container > Bell icon (emoji) > Label > Status dot\n  * Color transitions on toggle',
      logic: '* Boolean: notifications on/off\n  * Bell icon changes state\n  * Dot indicator shows status',
    }),
    render: () => <C.NotifToggle variant={v} label={NOTIF_NAMES[v-1]} />
  })),

  progress: makeVariants(20, v => ({
    name: v <= 10 ? PROGRESS_NAMES[v-1] : CIRCULAR_NAMES[v-11], variant: v,
    promptMeta: pm(v <= 10 ? 'Linear Progress Bar' : 'Circular Progress', v, {
      purpose: `${v <= 10 ? PROGRESS_NAMES[v-1] : CIRCULAR_NAMES[v-11]} — ${v <= 10 ? 'linear' : 'circular'} progress indicator`,
      structure: v <= 10
        ? '* Wrapper > Label row > Track (full width) > Fill (animated width)'
        : '* SVG container > Background circle > Progress arc (stroke-dashoffset)\n  * Center value text',
      logic: '* Numeric 0-100\n  * Click to increment by 10\n  * Animated transitions on value change',
    }),
    render: () => v <= 10
      ? <C.ProgressBar variant={v} value={45 + v * 3} label={PROGRESS_NAMES[v-1]} />
      : <C.CircularProgress variant={v} value={50 + v * 2} />
  })),

  buttons: makeVariants(30, v => ({
    name: BTN_NAMES[v-1], variant: v,
    promptMeta: pm('Button', v, {
      purpose: `${BTN_NAMES[v-1]} button — interactive with press animation and glow`,
      structure: '* Button element with text + optional icon\n  * Ripple/press effect on click',
      logic: '* Click handler with visual feedback\n  * Scale animation on press\n  * Hover state changes',
    }),
    render: () => <C.Button variant={v} text={BTN_NAMES[v-1]} />
  })),

  cards: makeVariants(32, v => ({
    name: CARD_NAMES[v-1], variant: v,
    promptMeta: pm('Card', v, {
      purpose: `${CARD_NAMES[v-1]} card — content container with hover lift effect`,
      structure: '* Card container > Card body > Title (h4) + Description (p)',
      logic: '* Hover: translateY(-4px) lift\n  * Border and shadow transitions\n  * Content is customizable',
    }),
    render: () => <C.Card variant={v} title={CARD_NAMES[v-1]} />
  })),

  inputs: makeVariants(20, v => ({
    name: INPUT_NAMES[v-1], variant: v,
    promptMeta: pm('Input Field', v, {
      purpose: `${INPUT_NAMES[v-1]} input — text field with focus glow animation`,
      structure: '* Wrapper > Input element\n  * Focus state with border color and glow change',
      logic: '* Text input with controlled state\n  * Focus: border glows, shadow appears\n  * Placeholder text in muted color',
    }),
    render: () => <C.Input variant={v} placeholder={`${INPUT_NAMES[v-1]}...`} />
  })),

  dropdowns: makeVariants(20, v => ({
    name: DROPDOWN_NAMES[v-1], variant: v,
    promptMeta: pm('Dropdown', v, {
      purpose: `${DROPDOWN_NAMES[v-1]} dropdown — select menu with animated open/close`,
      structure: '* Container > Trigger button > Dropdown menu (absolute)\n  * Menu items with hover highlight',
      logic: '* Open/close toggle on click\n  * Item selection updates trigger text\n  * Animated entrance with scale and opacity',
    }),
    render: () => <C.Dropdown variant={v} placeholder={DROPDOWN_NAMES[v-1]} />
  })),

  modals: makeVariants(20, v => ({
    name: MODAL_NAMES[v-1], variant: v,
    promptMeta: pm('Modal', v, {
      purpose: `${MODAL_NAMES[v-1]} modal — dialog overlay with spring animation`,
      structure: '* Trigger button > Overlay (fixed) > Modal box\n  * Header (title + close) > Body > Footer (actions)',
      logic: '* Open/close boolean state\n  * Overlay click closes\n  * Spring animation on enter/exit\n  * Focus trap within modal',
    }),
    render: () => <C.Modal variant={v} title={MODAL_NAMES[v-1]} content={`This is the ${MODAL_NAMES[v-1]} modal variant with spring animation and overlay backdrop.`} />
  })),

  tabs: makeVariants(20, v => ({
    name: TAB_NAMES[v-1], variant: v,
    promptMeta: pm('Tabs', v, {
      purpose: `${TAB_NAMES[v-1]} — tabbed navigation with animated content transition`,
      structure: '* Tab list (flex row) > Tab buttons\n  * Tab content panel (animated swap)',
      logic: '* Active tab index state\n  * Click switches active tab\n  * Content fades in on change',
    }),
    render: () => <C.Tabs variant={v} tabs={['Overview', 'Features', 'Code']} />
  })),

  navigation: makeVariants(25, v => ({
    name: NAV_NAMES[v-1], variant: v,
    promptMeta: pm('Navigation Bar', v, {
      purpose: `${NAV_NAMES[v-1]} — mini navigation component with active indicator`,
      structure: '* Container > Nav items (flex row)\n  * Active item highlighted with background/color',
      logic: '* Active item index state\n  * Click updates active\n  * Transition on active change',
    }),
    render: () => <C.NavDemo variant={v} />
  })),

  clocks: makeVariants(30, v => ({
    name: CLOCK_NAMES[v-1], variant: v,
    promptMeta: pm(v <= 10 ? 'Digital Clock' : 'Analog Clock', v, {
      purpose: `${CLOCK_NAMES[v-1]} — ${v <= 10 ? 'digital display' : 'analog face'} with live time`,
      structure: v <= 10
        ? '* Container > Hours : Minutes : Seconds\n  * Blinking colon separator'
        : '* Clock face (circle) > Hour/Minute/Second hands (absolute positioned)\n  * Center dot',
      logic: '* Real-time update via setInterval (1s)\n  * Smooth hand rotation for analog\n  * Colon blink for digital',
    }),
    render: () => <C.Clock variant={v} />
  })),

  loaders: makeVariants(20, v => ({
    name: LOADER_NAMES[v-1], variant: v,
    promptMeta: pm('Loader', v, {
      purpose: `${LOADER_NAMES[v-1]} — animated loading indicator`,
      structure: '* Container > Animated element(s)\n  * CSS or Framer Motion animation loop',
      logic: '* Infinite animation loop\n  * No user interaction needed\n  * Pure visual feedback',
    }),
    render: () => <C.Loader variant={v} />
  })),
}

export function getComponents(categoryId) {
  return REGISTRY[categoryId] || []
}

export function getAllComponents() {
  return Object.entries(REGISTRY).flatMap(([catId, components]) => 
    components.map(c => ({ ...c, categoryId: catId }))
  )
}
