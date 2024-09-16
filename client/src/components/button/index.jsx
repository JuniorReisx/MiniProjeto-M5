import "./style.css"

export function Button(props) {

    

    return (
        <>
     
            {props.type === "yellow" && 
                <button onClick={()=> console.log("btn-yellow")} className="btn-yellow">
                    <p>{props.title}</p>
                </button>
            }

            {/* utilizando funcao criada no proprio componente */}
            {props.type === "blue" &&
                <button onClick={showLog} className="btn-blue">
                    <p>{props.title}</p>
                </button>
            }

            {/* utilizando funcao que veio como parametro */}
            {props.type === "purple" &&
                <button onClick={props.handleClick} className="btn-purple">
                    <p>{props.title}</p>
                </button>
            }

            {props.type === undefined || null &&
                <button onClick={props.handleClick} className="btn-yellow">
                    <p>{props.title}</p>
                </button>
            }
        </>
    )
}

/* Porque utilizar components
 para reutilizar estruturas em todas as telas e componentes e
 para separar as estruturas e modifica-las de uma forma individual
*/