import React, {Component} from 'react'
import styles from '../../../../assets/scss/homepage.module.scss'

class Homepage extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <main className={styles.homepage}>
                <h1 className={styles.homepage__title}>Balanced</h1>
                <h2 className={styles.homepage__subtitle}>Cognitive-behavioral app to help you be happier person.</h2>
                <article className={styles.homepage__stat}>
                    Some graphs here
                </article>
                <article className={styles.homepage__presentation}>
                    <p>
                        Balanced - will analyze, memorize, send info to your therapist (only if you like). Y’ll get full privacy and anonymously.
                    </p>
                </article>
                <button className='start-btn'>Start</button>
            </main>
        )
    }
}

export {Homepage};