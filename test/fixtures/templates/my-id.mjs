export default async function MyId(html, state={}) {
  const { id } = state?.attrs
  return await html`
<span id="${id}"></span>
`
}
