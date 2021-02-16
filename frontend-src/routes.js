import NotFound from './routes/NotFound.svelte'
import Students from './routes/Students.svelte'
import UOI from './routes/UOI.svelte'
import Handbook from './routes/Handbook.svelte'
import Schedule from './routes/Schedule.svelte'
import Home from './routes/Home.svelte'
import Login from './routes/Login.svelte'
import Logout from './routes/Logout.svelte'
import Settings from './routes/Settings.svelte'

export default {
  // Catch-all, must be last
  '/': Home,
  '/students': Students,
  '/uoi': UOI,
  '/handbook': Handbook,
  '/schedule': Schedule,
  '/login': Login,
  '/logout': Logout,
  '/settings': Settings,
  '*': NotFound,
}
