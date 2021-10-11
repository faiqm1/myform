import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  marginTop: theme.spacing(3),
  height: 170,
  textAlign: 'left',
  color: theme.palette.text.secondary,
  display: 'flex',
}))

export default Item
