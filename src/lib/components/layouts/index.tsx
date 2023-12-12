import Admin from './Admin'
import Public from './Public'

export default function Template({ children, template }: { children: React.ReactNode, template: string }) {
    if (template === 'admin') {
        return <Admin>{children}</Admin>
    }
    else {
        return <Public>{children}</Public>
    }
}
