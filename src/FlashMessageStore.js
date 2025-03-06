import { atom, useAtom} from 'jotai';
// atom = a piece of data that is going to be shared

// create an atom
// -> the atom function will return a new atom
// atom == data that is being shared
export const flashMessageAtom = atom({
    'message': '',
    'type':'info'
})

// custom hook ==> a hook is a way to add additional functionality
// to a component
// a hook is a function that returns one or more functions/variables
export const useFlashMessage = () => {

    // get the atom and the mutator function to update the atom
    // which shared data to update or to get from --> flashMessageAtom
    const [flashMessage, setFlashMessage] = useAtom(flashMessageAtom);

    // helper functions: a function that make things more convinent for the programmer

    // set which message to show
    // -> when a function parameter has a "= xyz", then xyz is the default value4
    // (the parameter becomes optional)
    const showMessage = (message, type="info") => {
        setFlashMessage({
            message,
            type
        })
    }

    // clear message
    // remove the current flash message
    const clearMessage = () => {
        setFlashMessage({
            message:'',
            type:'info'
        })
    }

    // get the current message
    const getMessage = () => {
        return flashMessage;
    }

    // return an object that contains the three functions that we have created
    return {
        getMessage, showMessage, clearMessage
    }

}