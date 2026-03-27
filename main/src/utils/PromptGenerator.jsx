// Prompt Generator Utility
// Generates structured AI prompts from component metadata

export function generatePrompt(meta) {
  const {
    name, variantNumber, purpose, colors, glowEffects, shadows, borderRadius,
    spacing, layout, hoverBehavior, clickBehavior, stateTransitions,
    animationDuration, animationEasing, behaviorLogic, componentStructure,
    styling, responsiveness, accessibility
  } = meta;

  return `### Component Prompt

* **Name:** ${name}
* **Variant Number:** ${variantNumber}
* **Purpose:** ${purpose}

* **Visual Design:**
  * Colors: ${colors || 'Primary: #B4FF00 (Acid Lime), Background: #0B1A12 (Deep Matrix Green), Text: #E8FFE8'}
  * Glow effects: ${glowEffects || 'Neon glow — 0 0 10px rgba(180,255,0,0.3), 0 0 20px rgba(180,255,0,0.15)'}
  * Shadows: ${shadows || '0 4px 16px rgba(0,0,0,0.4)'}
  * Border radius: ${borderRadius || '10px'}

* **Layout:**
  * Spacing: ${spacing || '16px padding, 8px gap between elements'}
  * Flexbox/Grid: ${layout || 'Flexbox row, center aligned, gap 8px'}

* **Interaction:**
  * Hover: ${hoverBehavior || 'Scale 1.02, glow intensity increases, border brightens'}
  * Click: ${clickBehavior || 'Scale 0.98 press effect, ripple animation from click point'}
  * State transitions: ${stateTransitions || 'Smooth 250ms cubic-bezier(0.4, 0, 0.2, 1)'}

* **Animation:**
  * Duration: ${animationDuration || '250ms'}
  * Easing: ${animationEasing || 'cubic-bezier(0.4, 0, 0.2, 1)'}

* **Behavior Logic:**
  ${behaviorLogic || '* Toggle between on/off states\n  * Update visual state accordingly'}

* **Component Structure:**
  ${componentStructure || '* Container > Track > Thumb\n  * Label text optional'}

* **Styling:**
  ${styling || '* CSS custom properties for theming\n  * Dark background with neon accent colors\n  * Glassmorphism with backdrop-filter blur'}

* **Responsiveness:**
  ${responsiveness || '* Mobile: Full width, touch-friendly 44px min targets\n  * Desktop: Inline, standard sizing'}

* **Accessibility:**
  ${accessibility || '* Keyboard: Tab to focus, Space/Enter to activate\n  * ARIA: role, aria-checked/aria-label\n  * Focus visible outline with glow effect'}`;
}

export function copyToClipboard(text) {
  return navigator.clipboard.writeText(text);
}
