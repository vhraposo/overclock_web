import { Container } from './styles.js'

export function Button({ icon: Icon, title, loading = false, ...rest }) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {Icon && <Icon />}
      {loading ? 'Loading...' : title}
    </Container>
  )
}
