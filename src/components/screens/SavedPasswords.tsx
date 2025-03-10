import Heading from '../Heading'
import Button from '../Button'
import IconLock from '../Icon/IconLock'
import SavedPassword from '../SavedPassword'

import ScrollBar from '../ScrollBar'

const SavedPasswords = () => {

    return (
        <div className="card-content">
            <Heading>Saved Passwords</Heading>
            <ScrollBar>
                <SavedPassword title="Gmail" />
                <SavedPassword title="Facebook" />
                <SavedPassword title="Instagram" />
                <SavedPassword title="Gmail" />
                <SavedPassword title="Facebook" />
                <SavedPassword title="Instagram" />
                <SavedPassword title="Gmail" />
                <SavedPassword title="Facebook" />
                <SavedPassword title="Instagram" />
            </ScrollBar>
            <Button>Save Onine <IconLock /></Button>
        </div>
    )
}

export default SavedPasswords