export default function guest(next) {
    if (!localStorage.getItem('access_token')) {
        return next();
    }

    return next({ name: 'Main' });
}
