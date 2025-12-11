import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'CommentLayout metadata'
}
type Props = {children: React.ReactNode}
const CommentLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default CommentLayout;