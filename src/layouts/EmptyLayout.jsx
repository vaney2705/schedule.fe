import TheHeader from "../components/TheHeader.jsx";
import ErrorPage from "../pages/error/ErrorPage.jsx";

export default function EmptyLayout(props) {
  return (
      <>
        <TheHeader name={'Schedule.fe'}/>
        <ErrorPage/>
      </>
  )
}