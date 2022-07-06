import { FC, memo } from 'react'

const radius = 175
const diameter = Math.round(Math.PI * radius * 2)
const getOffset = (val = 0) =>
  Math.round(((100 - Math.min(val, 100)) / 100) * diameter)

export interface ICircularProgressBarProps {
  className?: string
  progress: number
  animate?: boolean
  animationDuration?: string
  showPercentage?: boolean
  showPercentageSymbol?: boolean
  progressColor?: string
  bgColor?: string
  textColor?: string
  size?: string
  lineWidth?: string
  percentSpacing?: number
  roundedStroke?: boolean
  responsive?: boolean
  showInnerText?: boolean
  innerText?: string
  onAnimationEnd?(): void
}

export const CircularProgressBar: FC<ICircularProgressBarProps> = memo(
  ({
    className,
    progress = 0,
    animate = true,
    animationDuration = '1s',
    showPercentage = true,
    showPercentageSymbol = true,
    progressColor = '#558FFF',
    bgColor = '#558FFF',
    textColor = '#FFFFFF',
    size = '100',
    lineWidth = '25',
    percentSpacing = 10,
    roundedStroke,
    responsive,
    showInnerText = false,
    innerText,
    onAnimationEnd
  }: ICircularProgressBarProps) => {
    const renderText = () => {
      if (!showPercentage) return
      return (
        <>
          {showInnerText ? (
            <>
              <text
                style={{
                  fontFamily: 'inherit',
                  fontSize: 48,
                  fontWeight: 'bold'
                }}
                fill={textColor}
                x={radius}
                y={radius - 15}
                textAnchor="middle"
                dominantBaseline="central"
              >
                {progress}
                {showPercentageSymbol && '%'}
              </text>
              <text
                style={{
                  fontFamily: 'inherit',
                  fontSize: 32,
                  fontWeight: 'bold'
                }}
                fill={textColor}
                x={radius}
                y={radius + 30}
                textAnchor="middle"
                dominantBaseline="central"
              >
                {innerText}
              </text>
            </>
          ) : (
            <text
              style={{
                fontFamily: 'inherit',
                fontSize: 48,
                fontWeight: 'bold'
              }}
              fill={textColor}
              x={radius}
              y={radius}
              textAnchor="middle"
              dominantBaseline="central"
            >
              {progress}
              {showPercentageSymbol && <tspan dx={percentSpacing}>%</tspan>}
            </text>
          )}
        </>
      )
    }

    const strokeDashoffset = getOffset(progress)
    const transition = animate
      ? `stroke-dashoffset ${animationDuration} ease-out`
      : undefined
    const strokeLinecap = roundedStroke ? 'round' : 'butt'
    const svgSize = responsive ? '100%' : size

    return (
      <svg
        width={svgSize}
        height={svgSize}
        viewBox="-25 -25 400 400"
        className={className}
      >
        <circle
          stroke={bgColor}
          cx="175"
          cy="175"
          r="175"
          strokeWidth={lineWidth}
          fill="none"
        />
        <circle
          stroke={progressColor}
          transform="rotate(-90 175 175)"
          cx="175"
          cy="175"
          r="175"
          strokeDasharray="1100"
          strokeWidth={lineWidth}
          strokeDashoffset="1100"
          strokeLinecap={strokeLinecap}
          fill="none"
          style={{ strokeDashoffset, transition }}
          onTransitionEnd={onAnimationEnd}
        />
        {renderText()}
      </svg>
    )
  }
)

CircularProgressBar.displayName = 'CircularProgressBar'

export default CircularProgressBar
