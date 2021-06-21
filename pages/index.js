import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <section className="main">
        <div className="main__content">
            <h4 className="text-xl">Hello, my name is Eugene Paul Badato</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nostrum non tenetur sunt dolores amet voluptate quisquam facilis quos autem nesciunt quia aliquid quod eius, adipisci dolorum distinctio veritatis fugiat.</p>
            <button className="pushable mt-5">
                <span className="front">
                    Contact
                </span>
            </button>
        </div>
        
    </section>
  )
}
