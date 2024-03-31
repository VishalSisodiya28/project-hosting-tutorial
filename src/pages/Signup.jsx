import signupImg from "../assets/Images/signup.webp"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Join the people learning fromo EduVantage for better placements and bright career options"
      description1="Build skills for today, tomorrow, and beyond."
      description2="practice to future-proof your career."
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup