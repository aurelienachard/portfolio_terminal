import { useState } from "react"
import './style.css'

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
          <table key="help" className="mt-4">
            <tbody>
              <tr>
                <td className="border border-orange-500 p-2">Whois</td>
                <td className="border border-orange-500 p-2">Qui suis-je ?</td>
              </tr>
              <tr>
                <td className="border border-orange-500 p-2">Social</td>
                <td className="border border-orange-500 p-2">Mes reseaux</td>
              </tr>
              <tr>
                <td className="border border-orange-500 p-2">Projets</td>
                <td className="border border-orange-500 p-2">Mes projets sur github</td>
              </tr>
              <tr>
                <td className="border border-orange-500 p-2">Help</td>
                <td className="border border-orange-500 p-2">Vous savez deja ce que ca fait</td>
              </tr>
              <tr>
                <td className="border border-orange-500 p-2">Email</td>
                <td className="border border-orange-500 p-2">Evitez de me spammer please</td>
              </tr>
            </tbody>
          </table>
        ]
      case 'whois':
        return [
          <div key="phrase1" className="mt-4">
            <p>Salut, moi c&apos;est Aurélien! 👋</p>
            <p>Je suis actuellement en formation de développeur web à la f@brique numérique 41.</p>
            <p>Ma technologie préférée, c&apos;est ChatGPT.</p>
            <p>Ahah je rigole.</p>
            <p>Plus sérieusement, mes stacks sont : ReactJS, Node.js, MySQL, PHP.</p>
            <p>À mes heures perdues, il m&apos;arrive de faire de la cybersécurité sur HackTheBox.</p>
            <p>Vous voulez voir mon profil sur HackTheBox, vous pouvez taper social.</p>
            <p>Pareil, si vous voulez voir mes projets, tapez social.</p>
            <p>À bientôt 😎</p>
          </div>
        ]
      case 'social':
        return [
          <p key="github" className="mt-4">Le lien de mon <a href="https://github.com/aurelienachard" target="_blank" className="underline">github</a></p>,
          <p key="linkedin">Le lien de mon <a href="https://www.linkedin.com/in/aurelien-achard-it/" target="_blank" className="underline">Linkedin</a></p>,
          <p key="hackthebox">Le lien de mon <a href="https://www.linkedin.com/in/aurelien-achard-it/" target="_blank" className="underline">Linkedin</a></p>
        ]
      case 'projets':
        return [
          <p key="projet1" className="mt-4">Projet <a href="https://github.com/aurelienachard/ecommerce_cafthe" target="_blank" className="underline">cafthe</a></p>,
          <p key="projet2">Projet <a href="https://github.com/aurelienachard/portfolio_terminal" target="_blank" className="underline">portfolio</a></p>
        ]
      case 'email':
        return [
          <p key="mail" className="mt-4">Mon email: <a href="mailto:contact@aurelienachard.com">contact@aurelienachard.com</a></p>
        ]
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
    <div className="bg-black text-orange-500 font-mono min-h-screen p-4">
      <h1 className="text-xl">Bienvenue sur mon portfolio web interactif</h1>
      <p>Pour obtenir une liste des commandes disponibles, tapez &quot;help&quot;.</p>

      <div>
        {command.map((cmd, index) => (
          <div key={index} className="mt-4">
            <p>{cmd}</p>
          </div>
        ))}
      </div>

      <form onSubmit={addNote}>
        <div>
          user@OS: <input type="text" value={newCommande} onChange={handleNewCommand} className="bg-black border border-orange-500 text-orange-500 p-2 mt-4"/>
        </div>
      </form>
    </div>
  )
}

export default App