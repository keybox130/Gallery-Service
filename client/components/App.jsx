/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import Header from './Header.jsx';
import Images from './Images.jsx';
import GalleryModal from './GalleryModal.jsx';
import SaveModal from './SaveModal.jsx';
import CreateListModal from './CreateListModal.jsx';

const axios = require('axios');

const HeaderImg = styled.div`
  flex-direction: row;
  height: 100px;
  background-image: url("https://imagesfec.s3.amazonaws.com/airbnb/header.png");
  background-repeat: no-repeat;
  background-size: auto 100px;
  background-position: center;
`;

const HomeMainDiv = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const GalleryModalDiv = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: absolute;
`;
const SaveModalDiv = styled.div`
 z-index: 3;
position: absolute;
`;
const CreateListDiv = styled.div`
 z-index: 4;
position: absolute;
`;

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stay: null,
      galleryShown: false,
      imageChosen: null,
      saveModalShown: false,
      // shareModalShown: false, // Upcoming feature
      createModalShown: false,
      lists: null,
      saved: false,
    };
    // Method Binding
    this.getStay = this.getStay.bind(this);
    this.getLists = this.getLists.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.showAllPhotos = this.showAllPhotos.bind(this);
    this.PrevOrNextImg = this.PrevOrNextImg.bind(this);
    this.SaveModalToggle = this.SaveModalToggle.bind(this);
    this.ShareModalToggle = this.ShareModalToggle.bind(this);
    this.heartClick = this.heartClick.bind(this);
    this.IncrementStayCount = this.IncrementStayCount.bind(this);
    this.listClicked = this.listClicked.bind(this);
    this.heartClickUnsave = this.heartClickUnsave.bind(this);
    this.CreateListModalToggle = this.CreateListModalToggle.bind(this);
  }

  // Invokes and in turn retrieves data from stay DB and List DB
  componentDidMount() {
    this.getStay(71);
    this.getLists();
  }

  // Gets selected stay
  getStay(roomId) {
    axios(`/gallery/stays/${roomId}`)
      .then((response) => {
        this.setState({
          stay: response.data[0],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Get All Lists in list DB
  getLists() {
    axios('/gallery/list')
      .then((response) => {
        this.setState({
          lists: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Increments or decrements the imageChose state
  PrevOrNextImg(direction) {
    if (direction === 'Back') {
      this.setState(
        {
          imageChosen: this.state.imageChosen - 1,
        },
      );
    }
    if (direction === 'Forward') {
      this.setState(
        {
          imageChosen: this.state.imageChosen + 1,
        },
      );
    }
  }

  // Toggles the Gallery Modal
  toggleModal(e) {
    const { galleryShown } = this.state;
    const { id } = e.target;
    this.setState({
      galleryShown: !galleryShown,
      imageChosen: Number(id),
    });
  }

  // Opens GalleryModal and presents the first image
  showAllPhotos() {
    const { galleryShown } = this.state;
    this.setState({
      galleryShown: !galleryShown,
      imageChosen: 0,
    });
  }

  // Show the Share Modal ( UPCOMING FUNCTIONALITY )
  // eslint-disable-next-line class-methods-use-this
  ShareModalToggle() {
    console.log('Share Modal invoked');
  }

  // Toggles the SaveModal
  SaveModalToggle() {
    const { saveModalShown } = this.state;
    this.setState({
      saveModalShown: !saveModalShown,
    });
  }

  // Toggles the CreateList Modal
  CreateListModalToggle() {
    this.SaveModalToggle();
    const { createModalShown } = this.state;
    this.setState({
      createModalShown: !createModalShown,
    });
  }

  // Clicking the heart toggles the save modal to allow user to save to list
  heartClick() {
    this.SaveModalToggle();
  }

  // When Clicking a list this will toggle saved and close the modal
  listClicked() {
    const { saved } = this.state;
    this.setState({
      saved: !this.state.saved,
    });
    this.SaveModalToggle();
  }

  // Increment The count of stay ( UPCOMING FUNCTIONALITY )
  // eslint-disable-next-line class-methods-use-this
  IncrementStayCount(currentCount) {
    console.log('Invoked increment Stay count', currentCount );
    const increasedCount = currentCount + 1;
    // console.log(increasedCount);
    // axios.post('/list', {
    //   listName: 'Dream Vacations',
    // })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  // Toggles heart saved state
  heartClickUnsave() {
    this.setState({
      saved: !this.state.saved,
    });
  }

  render() {
    // destructure state properties
    const {
      imageChosen, stay, lists, galleryShown, saveModalShown, saved, createModalShown,
    } = this.state;

    // If state.stay is true proceed with rendering Header component, else show loading.
    const header = stay ? (
      <Header
        stay={stay}
        saveModalToggle={this.SaveModalToggle}
        saved={saved}
        heartClick={this.heartClick}
        heartClickUnsave={this.heartClickUnsave}
      />
    )
      : <h1>A stay worth waiting for...</h1>;

    // If state.stay is true proceed with rendering Images component, else show loading.
    const images = stay ? (
      <Images
        toggleMod={this.toggleModal}
        photos={stay.photos}
        showAllPhotos={this.showAllPhotos}
      />
    )
      : <h1>A stay worth waiting for...</h1>;

    // Conditionally Render Gallery Modal
    const gallerymodal = (galleryShown && stay.photos)
      ? (
        <GalleryModal
          photos={stay.photos}
          imageSelected={imageChosen}
          toggleMod={this.toggleModal}
          saveModalToggle={this.SaveModalToggle}
          shareModalToggle={this.ShareModalToggle}
          showAllPhotos={this.showAllPhotos}
          prevOrNext={this.PrevOrNextImg}
          saved={saved}
          heartClick={this.heartClick}
          heartClickUnsave={this.heartClickUnsave}
        />
      )
      : <div />;
    // Conditionally Render Save Modal
    const savemodal = (saveModalShown && lists)
      ? (
        <SaveModal
          saveModalToggle={this.SaveModalToggle}
          photos={stay.photos}
          lists={lists}
          IncrementStayCount={this.IncrementStayCount}
          listClicked={this.listClicked}
          createListModalToggle={this.CreateListModalToggle}
        />
      )
      : <div />;
      // Conditionally Render List Modal
    const createListModal = createModalShown
      ? (
        <CreateListModal
          getLists={this.getLists}
          currentStay={stay}
          saveModalToggle={this.SaveModalToggle}
          createListModalToggle={this.CreateListModalToggle}
          heartClickUnsave={this.heartClickUnsave}
          lists={lists}
          IncrementStayCount={this.IncrementStayCount}
          listClicked={this.listClicked}
        />
      )
      : <div />;

    return (
      <>
        <CreateListDiv id="CreateListDiv">
          {createListModal}
        </CreateListDiv>
        <SaveModalDiv id="SaveModalDiv">{savemodal}</SaveModalDiv>
        <GalleryModalDiv id="GalleryModalDiv">{gallerymodal}</GalleryModalDiv>
        <HeaderImg id="HeaderImg" />
        <HomeMainDiv id="HomeMain DIV">
          <div id="Header">{header}</div>
          <div id="Image Gallery">{images}</div>
        </HomeMainDiv>
      </>
    );
  }
}

export default Gallery;

