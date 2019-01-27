import MainLayout from "../layout/MainLayout";

const Index = props => (
  <MainLayout>
    <div className="hello-next-again">
      <p>About page</p>
    </div>
    <style jsx>
      {`
        .hello-next-again {
          margin-top: 50px;
        }
      `}
    </style>
  </MainLayout>
);

export default Index;
