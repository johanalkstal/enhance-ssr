export default async function MyCounter(html, state={}) {
  const { count=0 } = state.attrs
  return await html`
<h3>Count: ${count}</h3>
`
}
