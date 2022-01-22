export default async function MyMoreContent(html, state={}) {
  const { items=[] } = state?.attrs
  console.log('ITEMS: ', items[0])
  return await html`<pre>${items[0]}</pre>`
}
