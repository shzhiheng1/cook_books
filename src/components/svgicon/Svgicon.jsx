import React from 'react'

const importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('@/assets/images/svg', true, /\.svg$/))
} catch (error) {
  console.log(error)
}
function Svgicon(props) {
  return (
    <svg className='icon'>
      <use xlinkHref={ '#' + props.name } />
    </svg>
  )
}

export default Svgicon