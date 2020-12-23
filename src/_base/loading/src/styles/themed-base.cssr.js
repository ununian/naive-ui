import { cTB, c, cB, cE } from '../../../../_utils/cssr'
import iconSwitchTransition from '../../../../_styles/transitions/icon-switch'

const dashOffset = 500

export default c([
  ({ props }) => {
    const {
      $global: {
        cubicBezierEaseInOut
      },
      $local: {
        color
      }
    } = props
    return [
      cTB('base-loading', {
        raw: `
          position: relative;
          line-height: 0;
          width: 1em;
          height: 1em;
          transition: stroke .3s ${cubicBezierEaseInOut};
        `
      }, [
        cE('placeholder', {
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translateX(-50%) translateY(-50%)'
        }, [
          iconSwitchTransition({
            left: '50%',
            top: '50%',
            originalTransform: 'translateX(-50%) translateY(-50%)'
          })
        ]),
        cE('icon', [
          iconSwitchTransition()
        ]),
        cB('base-loading-circular', {
          raw: `
            stroke: ${color};
            height: 100%;
            width: 100%;
            animation: n-base-loading-rotate 1.5s linear infinite;
            transform-origin: center;
          `
        }, [
          cB('base-loading-circular-path', {
            raw: `
              transform-origin: center;
              animation: n-base-loading-dash 1.5s ease-in-out infinite;
              stroke-dasharray: ${dashOffset};
              stroke-dashoffset: 0;
              stroke-linecap: round;
            `
          })
        ])
      ]),
      c('@keyframes n-base-loading-rotate', {
        raw: `
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(270deg);
          }
        `
      }),
      c('@keyframes n-base-loading-dash', {
        raw: `
          0% {
            stroke-dashoffset: ${dashOffset};
          }
          50% {
            stroke-dashoffset: ${dashOffset / 4};
            transform: rotate(135deg);
          }
          100% {
            stroke-dashoffset: ${dashOffset};
            transform: rotate(450deg);
          }
        `
      })
    ]
  }
])
