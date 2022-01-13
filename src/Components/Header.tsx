type Props = {
    name: string
    age: number
}

// Precisa disso porque é TypeScript.

export const Header = ({name, age}: Props ) => {

    return(

        <header>
            <h1> Olá {name}, tudo bem? Parabéns pelos seus {age} anos!  </h1>
        </header>
    )       
}

