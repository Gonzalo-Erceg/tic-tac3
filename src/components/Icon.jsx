export default function Icon({winner}) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100%"
        height="100%"
        version="1.1"
        viewBox="0 0 169.834 44.229"
        
      >
        <defs>
          <path d="M380.275 285.443H381.22299999999996V300.616H380.275z"></path>
          <path d="M313.419 174.964H386.43899999999996V210.526H313.419z"></path>
          <path d="M331.257 183.734H359.421V205.192H331.257z"></path>
        </defs>
        <g
          fill="#9a9d00"
          fillOpacity="0.988"
          display="inline"
          transform="translate(-8.525 -11.952)"
        >
          <path
            fill="#9a9d00"
            fillOpacity="0.988"
            stroke="#f3f900"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10.8"
            strokeOpacity="1"
            strokeWidth="1"
            d="M137.145 20.181s5.057 4.835 16.678 6.61l-6.432-9.05z"
            opacity="0.987"
            paintOrder="fill markers stroke"
          ></path>
        </g>
        <g
          fillOpacity="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10.8"
          display="inline"
          paintOrder="fill markers stroke"
          transform="translate(-22.572 -50.577)"
        >
          <text
            xmlSpace="preserve"
            style={{
              InkscapeFontSpecification: "Cambria",
              WebkitTextAlign: "justify",
              textAlign: "justify",
            }}
            fill="#000"
            stroke="#212121"
            strokeOpacity="0"
            strokeWidth="0.174"
            fontFamily="Cambria"
            fontSize="34.847"
            fontStretch="normal"
            fontStyle="normal"
            fontVariant="normal"
            fontWeight="normal"
            opacity="0.987"
            transform="rotate(2.742 -140.02 254.319)"
          >
            <textPath xlinkHref="#path3677">
              <tspan
                fill={`${winner || "#000"}`}
                fillOpacity="1"
                stroke="#212121"
                strokeOpacity="0"
                strokeWidth="0.174"
              >
                GANADOR
              </tspan>
            </textPath>
          </text>
          <path
            id="path3677"
            fill="none"
            stroke="none"
            strokeWidth="0.021"
            d="M-33.356-90.08a73.806 27.677 0 01-73.902 27.628 73.806 27.677 0 01-73.71-27.701 73.806 27.677 0 0173.839-27.653 73.806 27.677 0 0173.774 27.677"
            opacity="0.987"
            transform="scale(-1)"
          ></path>
        </g>
        <g
          stroke="#f3f900"
          strokeDasharray="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10.8"
          strokeOpacity="1"
          strokeWidth="1"
          display="inline"
          paintOrder="fill markers stroke"
          transform="translate(-8.525 -11.952)"
        >
          <path
            fill="#ecf000"
            fillOpacity="1"
            d="M148.287 14.24c1.317 6.71 9.786 3.324 9.786 3.324-3.325 2.634-4.203 9.032-4.203 9.032-5.081-8.091-16.623-6.523-16.623-6.523-.063-.753-1.254-7.59-1.254-7.59s3.324 7.464 12.294 1.756z"
            opacity="0.987"
          ></path>
          <path
            fill="#9a9d00"
            fillOpacity="0.988"
            d="M140.04 16.12s2.368-.833 2.298-3.16c0 0 .403 2.479 2.46 2.817"
            opacity="0.987"
          ></path>
          <path
            fill="#9a9d00"
            fillOpacity="0.988"
            d="M149.718 17.025s2.06.206 3.37-1.464c0 0-.735 2.464.69 2.751"
            opacity="0.987"
          ></path>
        </g>
      </svg>
    );
  }