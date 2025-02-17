import { useState } from "react"

const App = () => {
  const [command, setCommand] = useState([])
  const [newCommande, setNewCommand] = useState('')

  const handleNewCommand = (event) => {
    setNewCommand(event.target.value)
  }

  const processCommand = (cmd) => {
    switch(cmd.toLowerCase()) {
      case 'help':
        return [
          'Commandes disponibles:',
          'Whois - qui suis-je ?',
          'Social - mes reseaux',
          'Projets - mes projets sur github',
          'Help - Vous savez deja ce que ca fait',
          'Email - Evitez de me spammer please',
          'Banniere - Afficher la banniere'
        ]
      case 'whois':
        return []
      case 'social':
        return [
          <p key="github">Le lien de mon <a href="https://github.com/aurelienachard" target="_blank">github</a></p>,
          <p key="linkedin">Le lien de mon <a href="https://www.linkedin.com/in/aurelien-achard-it/" target="_blank">Linkedin</a></p>
        ]
      case 'projets':
        return [

        ]
      case 'email':
        return []
      case 'banniere':
        return []
      default:
        return [`Command not found: ${cmd}`]
    }
  }

  const addNote = (event) => {
    // evite le rechargement de la page
    event.preventDefault()
    // on attribue la valeur entrante de l'utilisateur a la fonction processCommand
    const response = processCommand(newCommande)
    // Utiliser concat pour ajouter la commande et la réponse
    // `...` l'operateur de composition qui me permet d'ajouter chaque element de la reponse comme une nouvelle ligne dans l'etat command
    setCommand(command.concat([`user@OS: ${newCommande}`, ...response]))
    // on reinitialise l'input
    setNewCommand('') 
  }

  return (
    <div>
      <h1>Bienvenue sur mon portfolio terminal.</h1>
      <p>Pour la liste des commandes, type help.</p>

      <div>
        {command.map((cmd, index) => (
          <div key={index}>
            <p>{cmd}</p>
          </div>
        ))}
      </div>

      <form onSubmit={addNote}>
        <div>
          user@OS: <input type="text" value={newCommande} onChange={handleNewCommand}/>
        </div>
      </form>
    </div>
  )
}

export default App