import { gs } from '@servicenow/glide'

export function showStateUpdate(current, previous): void { 
    const currentState: string = current.getValue('state')
    const previousState: string = previous.getValue('state')

    // gs.addInfoMessage(`state updated from "${previousState}" to "${currentState}"`)
    gs.addInfoMessage("Checking Typescript!");
}