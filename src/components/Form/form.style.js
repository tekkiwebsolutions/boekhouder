import styled from 'styled-components';

export const BtnWrapper = styled.div`
  text-align: center;
  padding: 45px 0px 0px;
  	button{
	  	padding: 13px 0px;
	    width: 192px;
	    text-transform: uppercase;
	    margin: 9px 15px 0px;
	    &.btn-outline-primary {
	    	color: #5166DA;
    		border-color: #5166DA;
    		:focus{
    			color: #5166DA;	
    			background: #fff;
    		}
    		:hover{
    			color: #5166DA;	
    			background: #fff;
    			box-shadow: 0px 9px 20px -5px rgb(133, 125, 222);
    		}
	    }
	    &.btn-secondary {
	    	color: #fff;
    		border-color: #857dde;
			background: #857dde; /* Old browsers */
			background: -moz-linear-gradient(left,  #857dde 1%, #5f66da 100%, #5f66da 101%); /* FF3.6-15 */
			background: -webkit-linear-gradient(left,  #857dde 1%,#5f66da 100%,#5f66da 101%); /* Chrome10-25,Safari5.1-6 */
			background: linear-gradient(to right,  #857dde 1%,#5f66da 100%,#5f66da 101%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
			filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#857dde', endColorstr='#5f66da',GradientType=1 ); /* IE6-9 */
			:hover{
    			box-shadow: 0px 9px 20px -5px rgb(133, 125, 222);
    		}
	    }
	}
`;

export const FormWrapper = styled.div`
    padding: 0px 55px;
	input[type=text], input[type=number], input[type=email] {
	    border: 0px;
	    border-bottom: 1px solid #000;
	    border-radius: 0px;
	    font-size: 14px;
	    :focus{
	    	box-shadow: none !important;
	    }
	}
	form {
	    padding: 50px 70px;
	    background-color: #fff;
	    box-shadow: 0px 0px 8px 1px #efe8e8;
	    border-radius: 6px;
	}
`;

export const BoxWrapper = styled.div`
	padding:0px 0px 40px 0px;
	label {
	    font-size: 14px;
	    padding-left: 6px;
	    vertical-align: top;
	}
 
`;

export const BoxinputWrapper = styled.div`
	.form-row {
    	margin: 20px 0px;
    	.col:first-child {
    		padding-right: 12px;
		}
		.col:last-child {
	    	padding-left: 12px;
		}
	}
`;

export const CardsWrapper = styled.div`
    padding-bottom: 50px;
	.card{
		text-align: center;
		padding: 35px 0px 0px 0px;
		box-shadow: 0px 0px 8px 2px #fdfafa;
		border: 0px;
		.card-body{
			.card-ico {
   				 min-height: 100px;
			}
			.card-title {
			    font-size: 29px;
			    letter-spacing: 0px;
			    font-weight: normal;
			}
			.card-subtitle {
    			font-weight: normal;
    		    padding-top: 5px;
			}
			h2 {
			    font-size: 24px;
			    font-weight: normal;
			    padding: 24px 0px 15px 0px;
			}
			.card-text {
			    line-height: 25px;
			    padding: 16px 0px 10px;
			    color: #ccc;
			    span {
				    color: #000;
				}
			}
			button {
			    padding: 10px 45px;
			    text-transform: uppercase;
			    font-size: 15px;
			    margin-bottom: 10px;
			    &.btn-secondary{
			    	color: #fff;
    				border-color: #857dde;
					background: #857dde; /* Old browsers */
					background: -moz-linear-gradient(left,  #857dde 1%, #5f66da 100%, #5f66da 101%); /* FF3.6-15 */
					background: -webkit-linear-gradient(left,  #857dde 1%,#5f66da 100%,#5f66da 101%); /* Chrome10-25,Safari5.1-6 */
					background: linear-gradient(to right,  #857dde 1%,#5f66da 100%,#5f66da 101%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
					filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#857dde', endColorstr='#5f66da',GradientType=1 ); /* IE6-9 */
					:hover{
    					box-shadow: 0px 9px 20px -5px rgb(133, 125, 222);
    				}
			    }

			    &.btn-primary{
			    	background: #528afa !important;
				    :hover{
	    				box-shadow: 0px 9px 20px -5px rgb(82, 138, 250);
	    				border-color: #528afa !important;
	    			}
			    }
			    
			}
		} 
	}
`;

