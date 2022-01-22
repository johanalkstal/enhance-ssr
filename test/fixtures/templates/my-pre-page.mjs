export default async function MyPrePage(html, state={}) {
  const { items=[] } = state?.attrs
  return await html`
<my-pre items=${items}></my-pre>`
}
