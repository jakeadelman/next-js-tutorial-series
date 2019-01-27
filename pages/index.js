import MainLayout from "../layout/MainLayout";

const Index = props => (
  <MainLayout>
    <div className="hello-next">
      <p>Hello next</p>
    </div>
    <style jsx>
      {`
        .hello-next {
          margin-top: 50px;
          font-size: 18px;
        }
      `}
    </style>
  </MainLayout>
);

export default Index;
