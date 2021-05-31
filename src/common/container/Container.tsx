import Layout from "../layout/Layout";

const Container = (component: any) => () => {
    return (
        <Layout>
            {component()}
        </Layout>
        )
}

export default Container;