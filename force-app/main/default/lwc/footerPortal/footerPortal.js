import { LightningElement } from 'lwc';
import facebookIcon from '@salesforce/resourceUrl/facebookIcon';
import instagramIcon from '@salesforce/resourceUrl/instagramIcon';
import youtubeIcon from '@salesforce/resourceUrl/youtubeIcon';
import linkedinIcon from '@salesforce/resourceUrl/linkedinIcon';
import appStoreIcon from '@salesforce/resourceUrl/appStoreIcon';
import googlePlayIcon from '@salesforce/resourceUrl/googlePlayIcon';

export default class FooterPortal extends LightningElement {
    facebookIcon = facebookIcon;
    instagramIcon = instagramIcon;
    youtubeIcon = youtubeIcon;
    linkedinIcon = linkedinIcon;
    appStoreIcon = appStoreIcon;
    googlePlayIcon = googlePlayIcon;
}