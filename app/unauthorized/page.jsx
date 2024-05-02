import Link from 'next/link'

const Unauthorized = () => {
  return (
    <div className="flex justify-center xl:justify-start items-center flex-col py-52 select-none px-3">
      <div className="py-2">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray font-light">UNAUTHORIZED</h1>
        <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray font-light">you have not an administrator role</p>
        <div className="flex flex-col sm:flex-row mt-2 space-x-1 items-center">
          <Link href={'/login'}
            className="xl:text-2xl text-blueLink font-medium"
          >
            Try again with an administrator email
          </Link>
          <p className="text-gray xl:text-xl font-medium">or</p>
          <Link href={"/"} className="xl:text-2xl text-blueLink font-medium">
           go iTech´s home page
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Unauthorized