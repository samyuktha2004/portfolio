# Color Accessibility Audit — Current Rules

WCAG AA targets are 4.5:1 for normal text and 3:1 for large text and essential graphical controls.

## Approved readable text colors on white/light surfaces

| Token | Value | Intended use |
|---|---|---|
| Body gray | `#374151` | Primary body copy |
| Secondary gray | `#6B7280` | Supporting copy and metadata |
| `BLUE_TEXT` | `#2B7FB5` | Blue labels, links, and secondary actions |
| `PURPLE_TEXT` | `#7a5b8a` | Purple labels on white/light surfaces |
| `PURPLE_INK` | `#4B3268` | Text on lavender hero and CTA surfaces |
| Status text tokens | State-specific dark green/amber/red/slate | Availability labels |

## Restricted decorative colors

The following colors are intentionally pastel and must not carry readable text by themselves:

- `PRIMARY_PINK` / `BABY_PINK` `#FFB6C1`
- `SKY_BLUE` `#87CEEB`
- `LAVENDER` `#DDA0DD`
- `PURPLE_LIGHT` `#D4B8F4`
- `PURPLE_ACCENT` `#B298DC`
- `GOLD` `#FFD700`

Use these for surfaces, borders, rings, and decorative fills. Pair them with an approved dark text token.

## Pink interaction rule

`CTA_PINK` / `PINK_TEXT` `#E9518D` has approximately 3.44:1 contrast on white. It is approved for:

- Large headings
- Bold UI labels that meet the large-text threshold
- Filled CTA backgrounds with sufficiently large/bold white labels
- Borders, icons, and decorative emphasis

Do not use it for long small body copy. Use body gray, `BLUE_TEXT`, `PURPLE_TEXT`, or `PURPLE_INK` instead.

## Current component safeguards

- Standard buttons have visible borders and minimum 44px touch targets.
- Lavender heroes use `PURPLE_INK`, not white text.
- Status pills pair separate dot, surface, and dark-text tokens.
- Forms use dark labels and dark input text on white fields.
- Focus-visible outlines use the shared blue focus treatment.
- Image-loading failures render controlled fallbacks rather than broken images.

## Review checklist

- Never use a pastel brand token as text on white.
- Keep long copy in gray-700 or another AA dark token.
- Check text over gradients at both gradient endpoints.
- Preserve visible focus, hover, disabled, error, and success states.
- Re-run contrast checks whenever a semantic token changes.
