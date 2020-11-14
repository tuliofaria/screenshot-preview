import { useFormik } from "formik"
import { useState } from "react"

const Index = () => {
  const [url, setUrl] = useState('')
  const form = useFormik({
    initialValues:{
      url: ''
    },
    onSubmit: values => {
      setUrl(values.url)
    }
  })
  return(
    <div>
      <h1>Take Screenshot</h1>
      <form onSubmit={form.handleSubmit}>
        <input type='text' name='url' onChange={form.handleChange} value={form.values.url} />
        <button type='submit'>Take!</button>
      </form>
      {
        url !== '' && <img src={`/api/takepreview?url=${url}`} />
      }
    </div>
  )
}
export default Index
