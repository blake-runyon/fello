import Link from "next/link";

export default function DevNav() {
    const classes = 'pr-2'

    return (
        <nav>
            <Link 
                href={'/'}
                className={classes}
            >
                Home
            </Link>
            <Link 
                href={'/boards'}
                className={classes}
            >
                Boards
            </Link>
            <hr />
        </nav>
    )
}