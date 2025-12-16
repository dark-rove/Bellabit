import React from "react"

export const BellabitLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 130"
      className={className}
      fill="currentColor"
      shapeRendering="geometricPrecision"
    >
      {/* 1. الإطار الخارجي */}
      <rect 
        x="5" 
        y="15"
        width="390" 
        height="95" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="4" 
      />

      {/* 2. النص الرئيسي (BELLABIT) */}
      <text
        x="200"
        y="86"
        textAnchor="middle"
        fontFamily="Arial Black, 'Arial Black', Gadget, sans-serif"
        fontWeight="900"
        fontSize="72" 
        letterSpacing="-3"
        // السطرين دول هيجبروا النص إنه يلتزم بعرض 350 وحدة عشان مفيش حاجة تخرج بره
        textLength="350"
        lengthAdjust="spacingAndGlyphs"
      >
        BELLABIT
      </text>

      {/* 3. النص السفلي (TEAM BELLABIT) */}
      <rect x="115" y="100" width="170" height="15" fill="var(--background)" /> 
      <text
        x="200"
        y="112"
        textAnchor="middle"
        fontFamily="monospace"
        fontWeight="bold"
        fontSize="13"
        letterSpacing="3"
      >
        TEAM BELLABIT
      </text>
    </svg>
  )
}