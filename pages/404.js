import Button from '@/components/Button'
import PageHeader from '@/components/PageHeader'
import Link from 'next/link'

export default function Error404() {
  return (
    <main>
      <PageHeader title='Error 404' />

      <div className='container text-center'>
        <p className='mb-8'>Looks like you&apos;ve gotten a little lost. Can we help?</p>

        <Link href='/'>
          <Button decoration className='mx-auto'>
            Return Home
          </Button>
        </Link>
      </div>
    </main>
  )
}
