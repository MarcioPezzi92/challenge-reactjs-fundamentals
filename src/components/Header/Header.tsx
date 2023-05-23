import companyLogo from '../../assets/logo.svg'

export function Header() {
  return (
    <header className="w-full h-48 bg-gray-900 flex items-center justify-center">
      <img src={companyLogo} alt="Company logo"/>
    </header>
  )
}