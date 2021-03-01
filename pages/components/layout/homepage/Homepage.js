import React, {Component} from 'react'

class Homepage extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <main>
                <h1>Balanced</h1>
                <h2>Cognitive-behavioral app to help you be happier person.</h2>
                <article>
                    Some graphs here
                </article>
                <article>
                    <p>
                        Balanced - will analyze, memorize, send info to your therapist (only if you like). Y’ll get full privacy and anonymously.
                    </p>
                </article>
                <button>Start</button>
            </main>
        )
    }
}

export {Homepage};