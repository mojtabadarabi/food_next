import Admin from './Admin'
import Public from './Public'

export default function Template({ children, template,user }: { children: React.ReactNode, template: string,user:any }) {
    if (template === 'admin') {
        return <Admin user={user}>{children}</Admin>
    }
    else {
        return <Public>{children}</Public>
    }
}
