
import React from 'react'

import { Section } from 'Atoms'

import { Item, Button } from './Visuals'

export function Home () {
  const [blocks, setBlocks] = React.useState(null)
  const [visual, setVisual] = React.useState([0, 1, 2, 3])
  const [items] = React.useState([
    { name: 'One' },
    { name: 'Two' },
    { name: 'Three' },
    { name: 'Four' },
    { name: 'Five' }
  ])

  function incrementPage () {
    setVisual(visual.map(n => n + 4))
  }

  function decrementPage () {
    setVisual(visual.map(n => n - 4))
  }

  function getVisualItem (i) {
    // Positive value less than display, show item.
    if (i < items.length && i >= 0) {
      return <Item key={i} name={items[i].name} />
    // Negative value, determine actual index. OR
    // Positive value greater than display, determine actual index.
    } else {
      const realIndex = (i < 0) ? i + items.length : i - items.length
      return getVisualItem(realIndex)
    }
  }

  React.useEffect(() => {
    setBlocks(
      visual.map(i => {
        return getVisualItem(i)
      })
    )
  }, [visual])

  return (
    <Section>
      <Button onClick={() => decrementPage()}>Prev</Button>
      {blocks}
      <Button onClick={() => incrementPage()}>Next</Button>
    </Section>
  )
}

// const adjustedIndex = i - (items.length)
//
// if (realIndex < items.length) {
//   const data = items[i]
//   return (
//     <Item key={i} name={data.name} />
//   )
// } else {
//   if (adjustedIndex < items.length) {
//     const data = items[adjustedIndex]
//     return (
//       <Item key={i} name={data.name} />
//     )
//   }
// const data = items[adjustedIndex]
// return (
//   <Item key={i} name={data.name} />
// )
// @TODO memoized against items.
// function findPositiveItem () {
//   // Positive Algorithm
//   // d * i > l, increment d, reset i to 0
//   let i = 0
//   let d = 1
//   const l = items.length
//
//   if (d * i < l) {
//     // getItem
//     i++
//   } else {
//     d++
//     i = 0
//     findPositiveItem()
//   }
// }

// Negative Algorithm
