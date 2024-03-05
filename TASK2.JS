angular.module('imageGalleryApp', [])
.controller('GalleryController', function() {
    this.images = [
        {
            title: 'TAJ MAHAL',
            url: 'https://hblimg.mmtcdn.com/content/hubble/img/agra/mmt/activities/m_activities-agra-taj-mahal_l_400_640.jpg',
            description: 'Majestically located on the banks of Yamuna River, this wonder of the world was built by the Mughal Emperor Shah Jahan as a memorial for his beloved wife Mumtaz Mahal.'
        },
        {
            title: 'Agra Fort',
            url: 'https://hblimg.mmtcdn.com/content/hubble/img/agra/mmt/activities/m_activities_agra_agra_fort_1_l_384_638.jpg',
            description: 'A place of residence of the Mughal emperors till 1638, this 16th century fort was built by Akbar and is now a World Heritage Site.'
        },
        {
            title: 'Fatehpur Sikri',
            url: 'https://hblimg.mmtcdn.com/content/hubble/img/agra/mmt/activities/m_activities_agra_fatehpur_sikri_1_l_489_733.jpg',
            description: 'A small fort city near Agra, this place was founded as the Mughal capital by Akbar. This ghost-town now houses unique buildings depicting a blend of Islamic, Hindu and Christian architecture.'
        },
        // Add more images as needed
    ];

    this.showDetails = function(image) {
        this.selectedImage = image;
    };

    this.closeDetails = function() {
        this.selectedImage = null;
    };
});
