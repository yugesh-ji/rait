//@refresh
import HomeTwoMain from "@/components/home-two/HomeTwoMain";
import Wrapper from "@/layout/DefaultWrapper";
import Modal from "@/components/common/Modal";

const  Home = () => {
  return (
    <>
      <Wrapper>
        <main>
          <HomeTwoMain/>
          <Modal />
        </main>
      </Wrapper>
    </>
  );
}

export default Home